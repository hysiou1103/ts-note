// region Basic Interfaces

type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 213, y: '213' };

interface Person {
  first: string;
  last: string;
  nickname?: string;
  readonly id: number;
}

const Thomas: Person = {
  first: 'wen',
  last: 'Thomas',
  nickname: 'Tommy',
  id: 18,
};
Thomas.first = 'lin';
Thomas.id = 123; // readonly不能於後續修改

// end region Basic Interfaces
