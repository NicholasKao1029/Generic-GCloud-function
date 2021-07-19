# TODO
 create script to create the generic cloud func repo based on the parameters
 below.

 general flow would be 
 - Based on this repo 
 - Ask user for 
    - `FUNCTION_NAME`
    - `FUNCTION_REGION`
    - run time
    - exported function name (probably can just keep the same for simplicity)



### YAML FILE

two variables that need to be initialized
- `FUNCTION_NAME`
- `FUNCTION_REGION`


### package.json

#### start function

- need to install 
```
npm install --save-dev @google-cloud/functions-framework
```

[deploy documentation](https://cloud.google.com/functions/docs/running/function-frameworks)

```
"start": "npx functions-framework --target=${EXPORTED_FUNCTION_NAME} [--signature-type=http]",
```

#### deploy function
- note that --entry-point is only neccessary if `GCLOUD_FUNCTION_NAME` is different to `EXPORTED_FUNCTION_NAME` 
- the runtime should probably be allowed to be configured

[deploy documentation](https://cloud.google.com/sdk/gcloud/reference/functions/deploy)

```
"deploy": "gcloud functions deploy ${GCLOUD_FUNCTION_NAME} --entry-point ${EXPORTED_FUNCTION_NAME} --runtime nodejs12 --trigger-http --allow-unauthenticated"
```

#### environment variables

[env var documentation] (https://cloud.google.com/functions/docs/env-var)

- There is a .env.yaml file that can be used to denote the appropriate environment
variables although the default is that it will be ignored by git and gcloud git.

- There is further documentation about environment variables that allow for 
cmd line insertion and removal of environment variables
