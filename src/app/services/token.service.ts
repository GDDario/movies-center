import { Injectable } from "@angular/core";

import * as jsonData from "../../assets/config.json";

@Injectable({ providedIn: "root" })
export class TokenService {

  public getApiReadAccesToken(): string {
    let storedToken: string = localStorage.getItem("token") || "";
    if (storedToken === "") {
      const json = jsonData;
      storedToken = json.apiReadAccesToken;
    }
    return storedToken;
  }
}
