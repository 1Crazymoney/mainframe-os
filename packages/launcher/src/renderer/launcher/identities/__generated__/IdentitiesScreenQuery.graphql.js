/**
 * @flow
 * @relayHash c84e118d30a2660a2d1cc967f132e776
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdentitiesScreenQueryVariables = {||};
export type IdentitiesScreenQueryResponse = {|
  +viewer: {|
    +id: string
  |}
|};
export type IdentitiesScreenQuery = {|
  variables: IdentitiesScreenQueryVariables,
  response: IdentitiesScreenQueryResponse,
|};
*/


/*
query IdentitiesScreenQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "IdentitiesScreenQuery",
  "id": null,
  "text": "query IdentitiesScreenQuery {\n  viewer {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "IdentitiesScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "IdentitiesScreenQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6833823be7fd8d66d1ee38feca7ee57';
module.exports = node;
