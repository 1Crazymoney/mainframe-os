/**
 * @flow
 * @relayHash a019c379888e257a55a774d5c811c6ce
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppUpdateModal_userAppVersion$ref = any;
type AppsScreen_user$ref = any;
export type UpdateUserAppVersionMutationInput = {|
  userAppVersionID: string,
  webDomains: $ReadOnlyArray<WebDomainDefinitionInput>,
  clientMutationId?: ?string,
|};
export type WebDomainDefinitionInput = {|
  domain: string,
  internal?: ?boolean,
  external?: ?boolean,
|};
export type AppUpdateModalUpdateUserAppVersionMutationVariables = {|
  input: UpdateUserAppVersionMutationInput
|};
export type AppUpdateModalUpdateUserAppVersionMutationResponse = {|
  +updateUserAppVersion: ?{|
    +userAppVersion: {|
      +$fragmentRefs: AppUpdateModal_userAppVersion$ref
    |},
    +viewer: {|
      +$fragmentRefs: AppsScreen_user$ref
    |},
  |}
|};
export type AppUpdateModalUpdateUserAppVersionMutation = {|
  variables: AppUpdateModalUpdateUserAppVersionMutationVariables,
  response: AppUpdateModalUpdateUserAppVersionMutationResponse,
|};
*/


/*
mutation AppUpdateModalUpdateUserAppVersionMutation(
  $input: UpdateUserAppVersionMutationInput!
) {
  updateUserAppVersion(input: $input) {
    userAppVersion {
      ...AppUpdateModal_userAppVersion
      id
    }
    viewer {
      ...AppsScreen_user
      id
    }
  }
}

fragment AppUpdateModal_userAppVersion on UserAppVersion {
  localID
  settings {
    webDomains {
      domain
      internal
      external
    }
    id
  }
  update {
    fromVersion {
      manifest {
        profile {
          name
        }
        version
        webDomains {
          domain
          internal
          external
        }
      }
      id
    }
    toVersion {
      publicID
      manifest {
        profile {
          name
        }
        version
        webDomains {
          domain
          internal
          external
        }
      }
      id
    }
    permissionsChanged
  }
}

fragment AppsScreen_user on User {
  id
  apps {
    ...AppUpdateModal_userAppVersion
    localID
    appVersion {
      ...AppItem_appVersion
      app {
        publicID
        id
      }
      installationState
      manifest {
        profile {
          name
        }
        webDomains {
          domain
          internal
          external
        }
      }
      id
    }
    update {
      fromVersion {
        localID
        id
      }
      toVersion {
        installationState
        manifest {
          version
        }
        id
      }
      permissionsChanged
    }
    settings {
      permissionsChecked
      webDomains {
        domain
        internal
        external
      }
      id
    }
    id
  }
}

fragment AppItem_appVersion on AppVersion {
  localID
  installationState
  app {
    publicID
    id
  }
  developer {
    localID
    profile {
      name
    }
    id
  }
  manifest {
    profile {
      name
    }
  }
  update {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserAppVersionMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localID",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "webDomains",
  "storageKey": null,
  "args": null,
  "concreteType": "WebDomainDefinition",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "domain",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "internal",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "external",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "profile",
  "storageKey": null,
  "args": null,
  "concreteType": "GenericProfile",
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
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "manifest",
  "storageKey": null,
  "args": null,
  "concreteType": "AppManifest",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "version",
      "args": null,
      "storageKey": null
    },
    (v3/*: any*/)
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "publicID",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permissionsChanged",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "installationState",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppUpdateModalUpdateUserAppVersionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUserAppVersion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserAppVersionMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userAppVersion",
            "storageKey": null,
            "args": null,
            "concreteType": "UserAppVersion",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "AppUpdateModal_userAppVersion",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "AppsScreen_user",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppUpdateModalUpdateUserAppVersionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUserAppVersion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserAppVersionMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userAppVersion",
            "storageKey": null,
            "args": null,
            "concreteType": "UserAppVersion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "settings",
                "storageKey": null,
                "args": null,
                "concreteType": "UserAppSettings",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "update",
                "storageKey": null,
                "args": null,
                "concreteType": "AppUpdate",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "fromVersion",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppVersion",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v4/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "toVersion",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppVersion",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v6/*: any*/),
                      (v4/*: any*/)
                    ]
                  },
                  (v8/*: any*/)
                ]
              },
              (v4/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "apps",
                "storageKey": null,
                "args": null,
                "concreteType": "UserAppVersion",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "settings",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserAppSettings",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "permissionsChecked",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "update",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppUpdate",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "fromVersion",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AppVersion",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v4/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "toVersion",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AppVersion",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v6/*: any*/),
                          (v4/*: any*/),
                          (v9/*: any*/)
                        ]
                      },
                      (v8/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "appVersion",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppVersion",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v9/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "app",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "App",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v4/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "developer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Developer",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v5/*: any*/),
                          (v4/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "manifest",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AppManifest",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "update",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AppVersion",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/)
                        ]
                      },
                      (v4/*: any*/)
                    ]
                  },
                  (v4/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AppUpdateModalUpdateUserAppVersionMutation",
    "id": null,
    "text": "mutation AppUpdateModalUpdateUserAppVersionMutation(\n  $input: UpdateUserAppVersionMutationInput!\n) {\n  updateUserAppVersion(input: $input) {\n    userAppVersion {\n      ...AppUpdateModal_userAppVersion\n      id\n    }\n    viewer {\n      ...AppsScreen_user\n      id\n    }\n  }\n}\n\nfragment AppUpdateModal_userAppVersion on UserAppVersion {\n  localID\n  settings {\n    webDomains {\n      domain\n      internal\n      external\n    }\n    id\n  }\n  update {\n    fromVersion {\n      manifest {\n        profile {\n          name\n        }\n        version\n        webDomains {\n          domain\n          internal\n          external\n        }\n      }\n      id\n    }\n    toVersion {\n      publicID\n      manifest {\n        profile {\n          name\n        }\n        version\n        webDomains {\n          domain\n          internal\n          external\n        }\n      }\n      id\n    }\n    permissionsChanged\n  }\n}\n\nfragment AppsScreen_user on User {\n  id\n  apps {\n    ...AppUpdateModal_userAppVersion\n    localID\n    appVersion {\n      ...AppItem_appVersion\n      app {\n        publicID\n        id\n      }\n      installationState\n      manifest {\n        profile {\n          name\n        }\n        webDomains {\n          domain\n          internal\n          external\n        }\n      }\n      id\n    }\n    update {\n      fromVersion {\n        localID\n        id\n      }\n      toVersion {\n        installationState\n        manifest {\n          version\n        }\n        id\n      }\n      permissionsChanged\n    }\n    settings {\n      permissionsChecked\n      webDomains {\n        domain\n        internal\n        external\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment AppItem_appVersion on AppVersion {\n  localID\n  installationState\n  app {\n    publicID\n    id\n  }\n  developer {\n    localID\n    profile {\n      name\n    }\n    id\n  }\n  manifest {\n    profile {\n      name\n    }\n  }\n  update {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bbdd82c8d4c44626ce22a7ed716b5cfe';
module.exports = node;
