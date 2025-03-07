# 8.37.1 release (2024-10-10)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Artifacts

* rewrite-dotnet
* rewrite-gitlab

## New Recipes

* ai.timefold.solver.migration.v8.SolutionManagerRecommendAssignmentRecipe: Use `recommendAssignment()` instead of `recommendFit()`. 
* io.quarkus.updates.camel.camel47.CamelQuarkusMigrationRecipe: Migrates `camel 4.4` quarkus application to `camel 4.8`. 
* org.openrewrite.dotnet.MigrateToNet6: Run upgrade-assistant upgrade across a repository to upgrade projects to .NET 6.0. 
* org.openrewrite.dotnet.MigrateToNet7: Run upgrade-assistant upgrade across a repository to upgrade projects to .NET 7.0. 
* org.openrewrite.dotnet.MigrateToNet8: Run upgrade-assistant upgrade across a repository to upgrade projects to .NET 8.0. 
* org.openrewrite.dotnet.MigrateToNet9: Run upgrade-assistant upgrade across a repository to upgrade projects to .NET 9.0. 
* org.openrewrite.dotnet.UpgradeAssistant: Run upgrade-assistant upgrade across a repository to upgrade projects to a newer version of .NET. 
* org.openrewrite.dotnet.UpgradeAssistantAnalyze: Run upgrade-assistant analyze across a repository to analyze changes required to upgrade projects to a newer version of .NET. This recipe will generate an `org.openrewrite.dotnet.UpgradeAssistantAnalysis` data table containing the report details. 
* org.openrewrite.gitlab.core.AddTemplate: Add a GitLab template to an existing list, or add a new list where none was present. 
* org.openrewrite.gitlab.core.ChangeTemplate: Change a GitLab template in use. 
* org.openrewrite.gitlab.core.RemoveTemplate: Remove a GitLab template from use. 
* org.openrewrite.hibernate.EmptyInterceptorToInterface: In Hibernate 6.0 the `Interceptor` interface received default implementations therefore the NOOP implementation that could be extended was no longer needed. This recipe migrates 5.x `Interceptor#onPrepareStatement(String)` to 6.0 `StatementInspector#inspect()`. 
* org.openrewrite.hibernate.MigrateToHibernate60: This recipe will apply changes commonly needed when migrating to Hibernate 6.0.x. The hibernate dependencies will be updated to use the new org.hibernate.orm group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0. 
* org.openrewrite.hibernate.MigrateToHibernateDependencies60: This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.0.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies. 
* org.openrewrite.hibernate.MigrateUserType: With Hibernate 6 the `UserType` interface received a type parameter making it more strictly typed. This recipe applies the changes required to adhere to this change. 
* org.openrewrite.java.recipes.NoMutableStaticFieldsInRecipes: Remove mutable static fields from Recipe classes to discourage their use. 
* org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention: Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention` as part of Spring Boot 3.2 removals. 
* org.openrewrite.java.spring.framework.MigrateResponseStatusException: Migrate Spring Framework 5.3's `ResponseStatusException` method `getRawStatusCode()` to Spring Framework 6's `getStatusCode().value()` and `ResponseStatusException` method `getStatus()` to Spring Framework 6's `getStatusCode()`. 
* org.openrewrite.java.spring.framework.MigrateResponseStatusExceptionGetRawStatusCodeMethod: Migrate Spring Framework 5.3's `ResponseStatusException` method `getRawStatusCode()` to Spring Framework 6's `getStatusCode().value()`. 
* org.openrewrite.openapi.swagger.MigrateApiModelToSchema: Converts the `@ApiModel` annotation to `@Schema` and converts the "value" attribute to "name". 
* org.openrewrite.xml.AddOrUpdateChildTag: Adds or updates a child element below the parent(s) matching the provided `parentXPath` expression. If a child with the same name already exists, it will be replaced by default. Otherwise, a new child will be added. This ensures idempotent behaviour. 

## Removed Recipes

* **org.openrewrite.hibernate.MigrateToHibernateDependencies61**: This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies. 
* **org.openrewrite.java.spring.boot3.UpgradeSpringDoc_2**: Migrate applications to the latest spring-doc 2 release. This recipe will modify an application's build files and make changes code changes for removed/updated APIs. See the upgrade guide 

## Changed Recipes

* org.openrewrite.gradle.UpdateGradleWrapper was changed:
  * Old Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `version: { type: String, required: false }`
    * `wrapperUri: { type: String, required: false }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `distributionChecksum: { type: String, required: false }`
    * `version: { type: String, required: false }`
    * `wrapperUri: { type: String, required: false }`