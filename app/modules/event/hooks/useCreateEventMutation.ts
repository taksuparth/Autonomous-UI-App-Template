import { useCallback } from 'react';
import { gql, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EventType,
  type CreateEventMutation,
  type CreateEventMutationVariables,
} from '~/gql/graphql';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const CREATE_EVENT_MUTATION = gql(`
  #graphql
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
      name
    }
  }
`);

const createEventSchema = z.object({
  name: z.string().min(3, 'Event name must be at least 3 characters'),
  date: z.date({
    error: 'An event date is required.',
  }),
  startTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  type: z.nativeEnum(EventType, {
    error: 'Please select an event type.',
  }),
});

type Inputs = z.infer<typeof createEventSchema>;

const getDefaultEventDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 3);
  return date;
};

export function useCreateEventMutation() {
  const navigate = useNavigate();
  const [createEvent, { loading }] = useMutation<
    CreateEventMutation,
    CreateEventMutationVariables
  >(CREATE_EVENT_MUTATION);

  const form = useForm<Inputs>({
    resolver: zodResolver(createEventSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      date: getDefaultEventDate(),
      startTime: '18:30',
      type: EventType.Wedding,
    },
  });

  const onSubmit = useCallback(
    async (values: Inputs) => {
      try {
        // --- FIX FOR DATE FORMAT ---
        // 1. Get the date parts from the Date object to avoid timezone issues.
        // -------------------------

        const eventDate = new Date(values.date);
        const startTimeParts = values.startTime.split(':');
        eventDate.setHours(+startTimeParts[0], +startTimeParts[1], 0, 0);

        const { data } = await createEvent({
          variables: {
            input: {
              name: values.name,
              date: +values.date,
              startTime: eventDate.getTime(),
              type: values.type,
            },
          },
        });

        if (data?.createEvent?.id) {
          navigate(`/${data.createEvent.id}/home`);
        }
      } catch (e: any) {
        console.error('Failed to create event:', e);
        form.setError('root', {
          message: e.message || 'Could not create event. Please try again.',
        });
      }
    },
    [navigate, createEvent, form],
  );

  return { form, onSubmit, loading };
}
