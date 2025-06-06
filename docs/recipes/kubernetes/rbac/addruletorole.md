---
sidebar_label: "Add RBAC rules"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add RBAC rules

**org.openrewrite.kubernetes.rbac.AddRuleToRole**

_Add RBAC rules to ClusterRoles or namespaced Roles._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | rbacResourceType | Type of RBAC resource to which this recipe adds a rule. Valid options: `ClusterRole`, `Role` | `ClusterRole` |
| `String` | rbacResourceName | Glob pattern of the name of the RBAC resource to which this recipe adds a rule. | `my-cluster-role` |
| `Set` | apiGroups | Comma-separated list of API groups to which this rule refers. | `,v1` |
| `Set` | resources | Comma-separated list of Kubernetes resource types to which this rule refers. | `pods` |
| `Set` | resourceNames | *Optional*. Comma-separated list of names of Kubernetes resources to which this rule applies. | `my-pod` |
| `Set` | verbs | The API verbs to enable with this rule. | `get,list` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pod-*.yml` |

## License

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddRuleToRoleExample
displayName: Add RBAC rules example
recipeList:
  - org.openrewrite.kubernetes.rbac.AddRuleToRole: 
      rbacResourceType: ClusterRole
      rbacResourceName: my-cluster-role
      apiGroups: ,v1
      resources: pods
      resourceNames: my-pod
      verbs: get,list
      fileMatcher: '**/pod-*.yml'
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AddRuleToRole --recipe-option "rbacResourceType=ClusterRole" --recipe-option "rbacResourceName=my-cluster-role" --recipe-option "apiGroups=,v1" --recipe-option "resources=pods" --recipe-option "resourceNames=my-pod" --recipe-option "verbs=get,list" --recipe-option "fileMatcher='**/pod-*.yml'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.kubernetes.rbac.AddRuleToRole" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
[Jon Brisbin](mailto:jon@jbrisbin.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), Tyler Van Gorder, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Knut Wannheden](mailto:knut.wannheden@gmail.com)
