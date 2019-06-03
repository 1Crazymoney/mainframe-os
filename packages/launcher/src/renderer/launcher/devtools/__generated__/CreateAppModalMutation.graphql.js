/**
 * @flow
 * @relayHash 1ec1cea7c0992761f47c9a5374b71a9f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DeveloperAppsScreen_developer$ref = any;
export type AppCreateMutationInput = {
  name: string,
  contentsPath: string,
  version: string,
  developerID: string,
  permissionsRequirements: AppPermissionsRequirementsInput,
  clientMutationId?: ?string,
};
export type AppPermissionsRequirementsInput = {
  optional: AppPermissionDefinitionsInput,
  required: AppPermissionDefinitionsInput,
};
export type AppPermissionDefinitionsInput = {
  BLOCKCHAIN_SEND?: ?boolean,
  COMMS_CONTACT?: ?boolean,
  CONTACTS_READ?: ?boolean,
  WEB_REQUEST?: ?$ReadOnlyArray<?string>,
};
export type CreateAppModalMutationVariables = {|
  input: AppCreateMutationInput
|};
export type CreateAppModalMutationResponse = {|
  +createApp: ?{|
    +app: {|
      +id: string,
      +localID: string,
      +developer: {|
        +$fragmentRefs: DeveloperAppsScreen_developer$ref
      |},
      +profile: {|
        +name: string
      |},
    |}
  |}
|};
export type CreateAppModalMutation = {|
  variables: CreateAppModalMutationVariables,
  response: CreateAppModalMutationResponse,
|};
*/


/*
mutation CreateAppModalMutation(
  $input: AppCreateMutationInput!
) {
  createApp(input: $input) {
    app {
      id
      localID
      developer {
        ...DeveloperAppsScreen_developer
        id
      }
      profile {
        name
      }
    }
  }
}

fragment DeveloperAppsScreen_developer on OwnDeveloper {
  ...CreateAppModal_developer
  apps {
    ...AppItem_ownApp
    id
  }
}

fragment CreateAppModal_developer on OwnDeveloper {
  localID
}

fragment AppItem_ownApp on OwnApp {
  localID
  publicID
  developer {
    localID
    profile {
      name
    }
    id
  }
  profile {
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AppCreateMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AppCreateMutationInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localID",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "profile",
  "storageKey": null,
  "args": null,
  "concreteType": "NamedProfile",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateAppModalMutation",
  "id": null,
  "text": "mutation CreateAppModalMutation(\n  $input: AppCreateMutationInput!\n) {\n  createApp(input: $input) {\n    app {\n      id\n      localID\n      developer {\n        ...DeveloperAppsScreen_developer\n        id\n      }\n      profile {\n        name\n      }\n    }\n  }\n}\n\nfragment DeveloperAppsScreen_developer on OwnDeveloper {\n  ...CreateAppModal_developer\n  apps {\n    ...AppItem_ownApp\n    id\n  }\n}\n\nfragment CreateAppModal_developer on OwnDeveloper {\n  localID\n}\n\nfragment AppItem_ownApp on OwnApp {\n  localID\n  publicID\n  developer {\n    localID\n    profile {\n      name\n    }\n    id\n  }\n  profile {\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateAppModalMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createApp",
        "storageKey": null,
        "args": v1,
        "concreteType": "AppCreateMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "app",
            "storageKey": null,
            "args": null,
            "concreteType": "OwnApp",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "developer",
                "storageKey": null,
                "args": null,
                "concreteType": "OwnDeveloper",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DeveloperAppsScreen_developer",
                    "args": null
                  }
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateAppModalMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createApp",
        "storageKey": null,
        "args": v1,
        "concreteType": "AppCreateMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "app",
            "storageKey": null,
            "args": null,
            "concreteType": "OwnApp",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "developer",
                "storageKey": null,
                "args": null,
                "concreteType": "OwnDeveloper",
                "plural": false,
                "selections": [
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "apps",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OwnApp",
                    "plural": true,
                    "selections": [
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "publicID",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "developer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "OwnDeveloper",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          v2
                        ]
                      },
                      v4,
                      v2
                    ]
                  },
                  v2
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8d674fedf8f89ef9dcba2f7651342fee';
module.exports = node;
