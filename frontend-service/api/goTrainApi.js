export async function testApi() {
  let options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  let response = await fetch(
    "https://api.gotransit.com/Api/schedules/stops/UN/departures?Page=1&PageLimit=1000",
    options
  );
  let responseOK = response && response.ok;
  if (responseOK) {
    const data = response.json();
  }
}
