export class TerritoriesState {
  CategoryList: TerritoryDetails[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: TerritoryListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: TerritoryDetails;
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
