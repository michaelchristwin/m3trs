import {
  DuneClient,
  ParameterType,
  QueryParameter,
  //QueryEngine,
} from "@duneanalytics/client-sdk";
import { DuneQueryModel } from "./model";

export abstract class DuneQuery {
  private static dune = new DuneClient(process.env.DUNE_API_KEY || "");
  static async getMeterTokensByOwner({
    owner,
  }: DuneQueryModel["getMeterTokensByOwnerParams"]) {
    // this.dune.exec.executeQuery(7462197, {
    //   query_parameters: [
    //     new QueryParameter(ParameterType.TEXT, "owner", owner),
    //   ],
    //   performance: QueryEngine.Medium,
    // });
    const query_result = await this.dune.getLatestResult({
      queryId: 7462197,
      query_parameters: [
        new QueryParameter(ParameterType.TEXT, "owner", owner),
      ],
    });
    return query_result;
  }
  static async getMeterBondsByOwner({
    owner,
  }: DuneQueryModel["getMeterBondsByOwnerParams"]) {
    const query_result = await this.dune.getLatestResult({
      queryId: 7468966,
      query_parameters: [
        new QueryParameter(ParameterType.TEXT, "owner", owner),
      ],
    });
    return query_result;
  }
}
