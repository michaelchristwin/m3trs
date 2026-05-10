import {
  DuneClient,
  ParameterType,
  QueryParameter,
} from "@duneanalytics/client-sdk";
import { DuneQueryModel } from "./model";

export abstract class DuneQuery {
  static async getMeterTokensByOwner({
    owner,
  }: DuneQueryModel["getMeterTokensByOwnerBody"]) {
    const dune = new DuneClient("$DUNE_API_KEY");
    const query_result = await dune.getLatestResult({
      queryId: 7462197,
      query_parameters: [
        new QueryParameter(ParameterType.TEXT, "owner", owner),
      ],
    });
  }
}
