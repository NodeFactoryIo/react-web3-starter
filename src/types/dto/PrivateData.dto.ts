export interface GetPrivateDataDto {
  id: number;
  name: string;
  timestamp: number;
}

export interface PutPrivateDataDto {
  id: number;
  name: string;
}

export interface PutPrivateDataResponseDto {
  id: number;
  name: string;
  timestamp: number;
}
