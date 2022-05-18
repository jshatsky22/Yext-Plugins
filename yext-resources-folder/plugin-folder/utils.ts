
declare const api_key: string;

export async function applyTemplate(entityId: string, templateId: string) {
    const requestBody = JSON.stringify({});
    const res = await fetch(
      `https://api.yext.com/v2/accounts/me/entities/${entityId}?api_key=${api_key}&v=20220210&templateId=${templateId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody
      }
    );
    const response = await res.json();
    console.log("Apply Template Response: ", response)
    return response;
  }
  