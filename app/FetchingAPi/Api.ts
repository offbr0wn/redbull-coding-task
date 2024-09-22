export interface Driver {
  driver_uuid: string;
  first_name: string;
  last_name: string;
  driver_country_code: string;
  team_uuid: string;
  season_team_name: string;
  season_points: number;
  driver_wins: number;
  driver_poles: number;
  driver_podiums: number;
  driver_fastest_laps: number;
}
export default async function Api() {
  try {
    const apiKey = "7303c8ef-d91a-4964-a7e7-78c26ee17ec4";
    const headers = {
      "x-api-key": apiKey,
    };
    const data = await fetch(
      "https://pitwall.redbullracing.com/api/stats/drivers/2024",
      {
        headers,
      }
    );
    const json = await data.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}
