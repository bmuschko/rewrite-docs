const latestVersions = {
  "{{VERSION_REWRITE_RECIPE_BOM}}": "3.3.0",
  "{{VERSION_REWRITE_GRADLE_PLUGIN}}": "7.1.7",
  "{{VERSION_REWRITE_MAVEN_PLUGIN}}": "6.2.3",
  "{{VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE}}": "0.2.0",
  "{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}}": "0.3.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_COBOL}}": "2.13.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}}": "8.47.4",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_CSHARP}}": "0.22.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}": "8.47.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_GROOVY}}": "8.47.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_HCL}}": "8.47.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}": "8.47.4",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_JAVASCRIPT}}": "0.32.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_JSON}}": "8.47.2",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_KOTLIN}}": "1.28.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}": "8.47.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_POLYGLOT}}": "2.1.2",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_PROPERTIES}}": "8.47.4",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_PROTOBUF}}": "8.47.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_PYTHON}}": "1.32.2",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_TEMPLATING}}": "1.23.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_TOML}}": "8.47.1",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_XML}}": "8.47.4",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_YAML}}": "8.47.4",
  "{{VERSION_ORG_OPENREWRITE_META_REWRITE_ANALYSIS}}": "2.18.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_AI_SEARCH}}": "0.25.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ALL}}": "1.12.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ANDROID}}": "0.7.3",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}": "2.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CIRCLECI}}": "3.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}": "0.9.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS_NG}}": "0.7.3",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_COMPILED_ANALYSIS}}": "0.2.5",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_COMPREHENSION}}": "0.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CONCOURSE}}": "3.2.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CUCUMBER_JVM}}": "2.2.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DOCKER}}": "2.2.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DOTNET}}": "0.8.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}": "1.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}": "3.2.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB}}": "0.8.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE}}": "2.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}": "0.14.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}": "1.29.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}": "3.2.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}": "0.21.2",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES}}": "3.2.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY}}": "1.13.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}": "3.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICROMETER}}": "0.16.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}": "2.18.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}": "3.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NODEJS}}": "0.18.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OKHTTP}}": "0.10.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI}}": "0.15.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}": "2.15.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REACTIVE_STREAMS}}": "0.10.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE}}": "0.1.2",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}": "6.2.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SQL}}": "2.1.2",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS}}": "2.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS}}": "0.11.2",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM}}": "3.1.2",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}": "3.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}": "0.16.1",
};
export default latestVersions;
