import day, { Day } from '@/lib/day';

function getDiffString(target: Day, from: Day = day()) {
  const diff = from.diff(target, 'days');
  const diffString = `D${diff < 0 ? '-' : '+'}${diff > 0 ? diff + 1 : diff}`;
  return diffString;
}

export default getDiffString;
