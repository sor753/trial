# IncomeApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**incomesGet**](IncomeApi.md#incomesget) | **GET** /incomes | Get incomes |
| [**incomesPost**](IncomeApi.md#incomespost) | **POST** /incomes | Add income |



## incomesGet

> Array&lt;Income&gt; incomesGet()

Get incomes

Get all incomes 

### Example

```ts
import {
  Configuration,
  IncomeApi,
} from '';
import type { IncomesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IncomeApi();

  try {
    const data = await api.incomesGet();
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


## incomesPost

> incomesPost(income)

Add income

Add income\&#39;s parameter 

### Example

```ts
import {
  Configuration,
  IncomeApi,
} from '';
import type { IncomesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IncomeApi();

  const body = {
    // Income | Income\'s information (optional)
    income: ...,
  } satisfies IncomesPostRequest;

  try {
    const data = await api.incomesPost(body);
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

