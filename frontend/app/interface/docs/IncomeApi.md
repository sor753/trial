# IncomeApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**incomGet**](IncomeApi.md#incomget) | **GET** /incom | Get incomes |
| [**incomPost**](IncomeApi.md#incompost) | **POST** /incom | Add income |



## incomGet

> Array&lt;Income&gt; incomGet()

Get incomes

Get all incomes 

### Example

```ts
import {
  Configuration,
  IncomeApi,
} from '';
import type { IncomGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IncomeApi();

  try {
    const data = await api.incomGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Income&gt;**](Income.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Income |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## incomPost

> incomPost(income)

Add income

Add income\&#39;s parameter 

### Example

```ts
import {
  Configuration,
  IncomeApi,
} from '';
import type { IncomPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IncomeApi();

  const body = {
    // Income | Income\'s information (optional)
    income: ...,
  } satisfies IncomPostRequest;

  try {
    const data = await api.incomPost(body);
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
| **income** | [Income](Income.md) | Income\&#39;s information | [Optional] |

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
| **200** | Income added |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

