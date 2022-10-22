export interface Camera {
  Address: String
  Enabled: Boolean
  ImageURL: String
  Name: String
  Password: String
  Port: Number
  Protocol: Number
  Username: String
  idx: String
}

export interface CameraResult {
  result: Camera[]
  status: String
  title: String
}
