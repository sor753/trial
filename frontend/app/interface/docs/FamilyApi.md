# FamilyApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**familiesGet**](FamilyApi.md#familiesget) | **GET** /families | Search families |
| [**familiesPost**](FamilyApi.md#familiespost) | **POST** /families | Add family |
| [**familiesPut**](FamilyApi.md#familiesput) | **PUT** /families | Add family |



## familiesGet

> Array&lt;Family&gt; familiesGet(freeQuery)

Search families

Search families using a free query parameter 

### Example

```ts
import {
  Configuration,
  FamilyApi,
} from '';
import type { FamiliesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FamilyApi();

  const body = {
    // string | A family\'s name, reference or partial description  (optional)
    freeQuery: freeQuery_example,
  } satisfies FamiliesGetRequest;

  try {
    const data = await api.familiesGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **freeQuery** | `string` | A family\&#39;s name, reference or partial description  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Family&gt;**](Family.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Families matching free query |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## familiesPost

> familiesPost(family)

Add family

Add family\&#39;s parameter 

### Example

```ts
import {
  Configuration,
  FamilyApi,
} from '';
import type { FamiliesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FamilyApi();

  const body = {
    // Family | Family\'s information (optional)
    family: ...,
  } satisfies FamiliesPostRequest;

  try {
    const data = await api.familiesPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **family** | [Family](Family.md) | Family\&#39;s information | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Family added  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## familiesPut

> familiesPut(family)

Add family

Add family\&#39;s parameter 

### Example

```ts
import {
  Configuration,
  FamilyApi,
} from '';
import type { FamiliesPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new FamilyApi();

  const body = {
    // Array<Family> | Family\'s information (optional)
    family: ...,
  } satisfies FamiliesPutRequest;

  try {
    const data = await api.familiesPut(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **family** | `Array<Family>` | Family\&#39;s information | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Family edited  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

