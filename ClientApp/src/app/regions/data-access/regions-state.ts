export class RegionsState {
  RegionList: RegionListItem[] = [];
  RegionListCount: Number = 0;
  RegionSearchList: RegionListItem[] = [];
  RegionSearchListCount: Number = 0;
  SelectedRegion: RegionDetails |  undefined;
}

export class RegionListItem {
  regionID: number = 0;
  regionDescription: string = '';
}

export class RegionDetails {
  regionID: number = 0;
  regionDescription: string = '';
}
