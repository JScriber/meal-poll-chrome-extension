interface Displayable {
  name: string;
  picture: string;
}

export interface Group {
  name: string;
  picture: string;
  members: Displayable[];
}

export interface Available extends Displayable {}
