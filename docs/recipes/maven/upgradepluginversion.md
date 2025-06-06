---
sidebar_label: "Upgrade Maven plugin version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade Maven plugin version

**org.openrewrite.maven.UpgradePluginVersion**

_Upgrade the version of a plugin using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/UpgradePluginVersion.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)
## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. Supports globs. | `org.openrewrite.maven` |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. Supports globs. | `rewrite-maven-plugin` |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | trustParent | *Optional*. Even if the parent suggests a version that is older than what we are trying to upgrade to, trust it anyway. Useful when you want to wait for the parent to catch up before upgrading. The parent is not trusted by default. |  |
| `Boolean` | addVersionIfMissing | *Optional*. If the plugin is missing a version, add the latest release. Defaults to false. |  |

## License

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradePluginVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradePluginVersionExample
displayName: Upgrade Maven plugin version example
recipeList:
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      newVersion: 29.X
      versionPattern: '-jre'
```

Now that `com.yourorg.UpgradePluginVersionExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">

<TabItem value="maven" label="Maven">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.UpgradePluginVersionExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradePluginVersion --recipe-option "groupId=org.openrewrite.maven" --recipe-option "artifactId=rewrite-maven-plugin" --recipe-option "newVersion=29.X" --recipe-option "versionPattern='-jre'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.UpgradePluginVersion" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

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
Aaron Gershman, [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Michael Keppler](mailto:bananeweizen@gmx.de), [Filipe Roque](mailto:froque@premium-minds.com)
