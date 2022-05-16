export default interface RaceModel = {
  round: Number;
  name: String;
  location: String;
  latitude: String;
  longitude: String;
  slug: String;
  localeKey: String;
  sessions?: Sessions;
  tbc: Boolean;
  canceled: Boolean;
};