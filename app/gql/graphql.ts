/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  pincode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  pincode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEventFunctionInput = {
  address?: InputMaybe<AddressInput>;
  addressUrl?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['Date']['input'];
  endTime?: InputMaybe<Scalars['Date']['input']>;
  eventId: Scalars['String']['input'];
  invitePdfUrl?: InputMaybe<Scalars['String']['input']>;
  isValetAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  startTime: Scalars['Date']['input'];
};

export type CreateEventInput = {
  /** The primary date of the event. */
  date: Scalars['Date']['input'];
  /** The name of the event. */
  name: Scalars['String']['input'];
  /** The official start time. */
  startTime: Scalars['Date']['input'];
  type?: InputMaybe<EventType>;
};

export type CreateGuestDocumentInput = {
  guestId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  type: DocumentType;
  url: Scalars['String']['input'];
};

export type CreateGuestGroupInput = {
  eventId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateGuestInput = {
  address?: InputMaybe<AddressInput>;
  alias?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  guestGroupId: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber: Scalars['String']['input'];
  prefix?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum DocumentType {
  Aadhar = 'AADHAR',
  DrivingLicense = 'DRIVING_LICENSE',
  Other = 'OTHER',
  Passport = 'PASSPORT'
}

export type Event = {
  __typename?: 'Event';
  createdAt?: Maybe<Scalars['Date']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  defaultFunction?: Maybe<EventFunction>;
  functions?: Maybe<Array<EventFunction>>;
  guestGroups?: Maybe<Array<GuestGroup>>;
  guests?: Maybe<Array<Guest>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  permissions?: Maybe<Array<EventPermission>>;
  startTime?: Maybe<Scalars['Date']['output']>;
  type?: Maybe<EventType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type EventFunction = {
  __typename?: 'EventFunction';
  address?: Maybe<Address>;
  addressUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  endTime?: Maybe<Scalars['Date']['output']>;
  event?: Maybe<Event>;
  groupAssignments?: Maybe<Array<EventFunctionGuestGroup>>;
  guestAssignments?: Maybe<Array<EventFunctionGuest>>;
  id?: Maybe<Scalars['ID']['output']>;
  invitePdfUrl?: Maybe<Scalars['String']['output']>;
  isValetAvailable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['Date']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type EventFunctionGuest = {
  __typename?: 'EventFunctionGuest';
  assignedAt?: Maybe<Scalars['Date']['output']>;
  eventFunction?: Maybe<EventFunction>;
  guest?: Maybe<Guest>;
};

export type EventFunctionGuestGroup = {
  __typename?: 'EventFunctionGuestGroup';
  assignedAt?: Maybe<Scalars['Date']['output']>;
  eventFunction?: Maybe<EventFunction>;
  guestGroup?: Maybe<GuestGroup>;
};

export type EventPermission = {
  __typename?: 'EventPermission';
  createdAt?: Maybe<Scalars['Date']['output']>;
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']['output']>;
  scopes?: Maybe<Array<Permission>>;
  user?: Maybe<User>;
};

export enum EventType {
  Corporate = 'CORPORATE',
  Other = 'OTHER',
  Party = 'PARTY',
  Wedding = 'WEDDING'
}

export type GrantPermissionInput = {
  eventId: Scalars['String']['input'];
  scopes: Array<Permission>;
  userId: Scalars['String']['input'];
};

export type Guest = {
  __typename?: 'Guest';
  address?: Maybe<Address>;
  alias?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  documents?: Maybe<Array<GuestDocument>>;
  email?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Event>;
  firstName?: Maybe<Scalars['String']['output']>;
  functionAssignments?: Maybe<Array<EventFunctionGuest>>;
  guestGroup?: Maybe<GuestGroup>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
};

export type GuestDocument = {
  __typename?: 'GuestDocument';
  createdAt?: Maybe<Scalars['Date']['output']>;
  guest?: Maybe<Guest>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  type?: Maybe<DocumentType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type GuestGroup = {
  __typename?: 'GuestGroup';
  createdAt?: Maybe<Scalars['Date']['output']>;
  event?: Maybe<Event>;
  functionAssignments?: Maybe<Array<EventFunctionGuestGroup>>;
  guests?: Maybe<Array<Guest>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  assignGuestGroupToFunction?: Maybe<EventFunctionGuestGroup>;
  assignGuestToFunction?: Maybe<EventFunctionGuest>;
  createEvent?: Maybe<Event>;
  createEventFunction?: Maybe<EventFunction>;
  createGuest?: Maybe<Guest>;
  createGuestDocument?: Maybe<GuestDocument>;
  createGuestGroup?: Maybe<GuestGroup>;
  createUser?: Maybe<User>;
  deleteEvent?: Maybe<Event>;
  deleteEventFunction?: Maybe<EventFunction>;
  deleteGuest?: Maybe<Guest>;
  deleteGuestDocument?: Maybe<GuestDocument>;
  deleteGuestGroup?: Maybe<GuestGroup>;
  deleteUser?: Maybe<User>;
  grantPermission?: Maybe<EventPermission>;
  revokePermission?: Maybe<EventPermission>;
  unassignGuestFromFunction?: Maybe<EventFunctionGuest>;
  unassignGuestGroupFromFunction?: Maybe<EventFunctionGuestGroup>;
  updateEvent?: Maybe<Event>;
  updateEventFunction?: Maybe<EventFunction>;
  updateGuest?: Maybe<Guest>;
  updateGuestGroup?: Maybe<GuestGroup>;
  updatePermissionScopes?: Maybe<EventPermission>;
  updateUser?: Maybe<User>;
};


export type MutationAssignGuestGroupToFunctionArgs = {
  functionId: Scalars['String']['input'];
  guestGroupId: Scalars['String']['input'];
};


export type MutationAssignGuestToFunctionArgs = {
  functionId: Scalars['String']['input'];
  guestId: Scalars['String']['input'];
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateEventFunctionArgs = {
  input: CreateEventFunctionInput;
};


export type MutationCreateGuestArgs = {
  input: CreateGuestInput;
};


export type MutationCreateGuestDocumentArgs = {
  input: CreateGuestDocumentInput;
};


export type MutationCreateGuestGroupArgs = {
  input: CreateGuestGroupInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteEventArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEventFunctionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGuestArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGuestDocumentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGuestGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationGrantPermissionArgs = {
  input: GrantPermissionInput;
};


export type MutationRevokePermissionArgs = {
  id: Scalars['String']['input'];
};


export type MutationUnassignGuestFromFunctionArgs = {
  functionId: Scalars['String']['input'];
  guestId: Scalars['String']['input'];
};


export type MutationUnassignGuestGroupFromFunctionArgs = {
  functionId: Scalars['String']['input'];
  guestGroupId: Scalars['String']['input'];
};


export type MutationUpdateEventArgs = {
  id: Scalars['String']['input'];
  input: UpdateEventInput;
};


export type MutationUpdateEventFunctionArgs = {
  id: Scalars['String']['input'];
  input: UpdateEventFunctionInput;
};


export type MutationUpdateGuestArgs = {
  id: Scalars['String']['input'];
  input: UpdateGuestInput;
};


export type MutationUpdateGuestGroupArgs = {
  id: Scalars['String']['input'];
  input: UpdateGuestGroupInput;
};


export type MutationUpdatePermissionScopesArgs = {
  id: Scalars['String']['input'];
  input: UpdatePermissionInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};

export enum Permission {
  DeleteEvent = 'DELETE_EVENT',
  DeleteFunction = 'DELETE_FUNCTION',
  DeleteGuestGroup = 'DELETE_GUEST_GROUP',
  DeleteGuestList = 'DELETE_GUEST_LIST',
  EditEvent = 'EDIT_EVENT',
  EditFunction = 'EDIT_FUNCTION',
  EditGuestGroup = 'EDIT_GUEST_GROUP',
  EditGuestList = 'EDIT_GUEST_LIST',
  ViewEvent = 'VIEW_EVENT',
  ViewFunction = 'VIEW_FUNCTION',
  ViewGuestGroup = 'VIEW_GUEST_GROUP',
  ViewGuestList = 'VIEW_GUEST_LIST'
}

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  eventFunction?: Maybe<EventFunction>;
  eventFunctions?: Maybe<Array<EventFunction>>;
  eventPermissions?: Maybe<Array<EventPermission>>;
  events?: Maybe<Array<Event>>;
  guest?: Maybe<Guest>;
  guestGroup?: Maybe<GuestGroup>;
  guestGroupsByEvent?: Maybe<Array<GuestGroup>>;
  guestsByEvent?: Maybe<Array<Guest>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventFunctionArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventFunctionsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventPermissionsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGuestArgs = {
  id: Scalars['String']['input'];
};


export type QueryGuestGroupArgs = {
  id: Scalars['String']['input'];
};


export type QueryGuestGroupsByEventArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGuestsByEventArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateEventFunctionInput = {
  address?: InputMaybe<AddressInput>;
  addressUrl?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  endTime?: InputMaybe<Scalars['Date']['input']>;
  invitePdfUrl?: InputMaybe<Scalars['String']['input']>;
  isValetAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateEventInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<EventType>;
};

export type UpdateGuestGroupInput = {
  name: Scalars['String']['input'];
};

export type UpdateGuestInput = {
  address?: InputMaybe<AddressInput>;
  alias?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  guestGroupId?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePermissionInput = {
  scopes: Array<Permission>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  eventPermissions?: Maybe<Array<EventPermission>>;
  events?: Maybe<Array<Event>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id?: string | null, name?: string | null } | null };

export type UsersQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id?: string | null, name?: string | null, email?: string | null, eventPermissions?: Array<{ __typename?: 'EventPermission', id?: string | null, scopes?: Array<Permission> | null, event?: { __typename?: 'Event', id?: string | null, name?: string | null, permissions?: Array<{ __typename?: 'EventPermission', scopes?: Array<Permission> | null }> | null } | null }> | null }> | null };


export const CreateEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"eventPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopes"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;