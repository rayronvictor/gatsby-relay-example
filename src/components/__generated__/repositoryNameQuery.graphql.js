/**
 * @flow
 * @relayHash 32bca5ac8c312efd5293bf0af0aec9e9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type repositoryNameQueryVariables = {||};
export type repositoryNameQueryResponse = {|
  +repository: ?{|
    +name: string
  |}
|};
export type repositoryNameQuery = {|
  variables: repositoryNameQueryVariables,
  response: repositoryNameQueryResponse,
|};
*/


/*
query repositoryNameQuery {
  repository(owner: "facebook", name: "relay") {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "repositoryNameQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "repositoryNameQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "repositoryNameQuery",
    "id": null,
    "text": "query repositoryNameQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4a881262dd738e06889d1f5a53f47a76';

module.exports = node;
