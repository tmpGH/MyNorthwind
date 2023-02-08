export class RegionsState {
  CategoryList: RegionListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: RegionListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: RegionDetails;
}

export class RegionListItem {
  regionID: number = 0;
  regionDescription: string = '';
}

export class RegionDetails {
  regionID: number = 0;
  regionDescription: string = '';
}
