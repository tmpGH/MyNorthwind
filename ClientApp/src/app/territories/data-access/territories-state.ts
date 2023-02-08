export class TerritoriesState {
  TerritoryList: TerritoryListItem[] = [];
  TerritoryListCount: Number = 0;
  TerritorySearchList: TerritoryListItem[] = [];
  TerritorySearchListCount: Number = 0;
  SelectedTerritory: TerritoryDetails | undefined;
}

export class TerritoryListItem {
  territoryID: string = '';
  territoryDescription: string = '';
  // TODO: region
  //RegionItemDto region { get; set; }
}

export class TerritoryDetails {
  territoryID: string = '';
  territoryDescription: string = '';
  // TODO: region
  //RegionItemDto region { get; set; }
}
