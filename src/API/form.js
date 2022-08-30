
export function queryAPI(url, method = "GET", requestBody) {
  if(method === "GET" && url === "https://not-a-real-endpoint.smallworld.ai/form") {
    const result = {
      status: 200,
      data: {
        jobFunctions: [
          "Accounting",
          "Sales",
          "Marketing"
        ],
        states: [
          {
            name: "California",
            abbreviation: "CA"
          },
          {
            name: "Nevada",
            abbreviation: "NV"
          },
        ]
      }
    }

    return JSON.stringify(result);
  } else if (method === "POST" && url === "https://not-a-real-endpoint.smallworld.ai/form") {
    const result = {
      status: 200,
      data: {
        id: 75,
        ...requestBody
      }
    }

    return JSON.stringify(result);
  }
}


export function postFormAPI() {}


