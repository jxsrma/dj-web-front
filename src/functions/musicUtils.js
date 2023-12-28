export const groupReleasesByYear = (releases) => {
  return releases.reduce((acc, release) => {
    const { year } = release;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(release);
    return acc;
  }, {});
};

export const getSortedYears = (releasesByYear) => {
  return Object.keys(releasesByYear).sort((a, b) => b - a);
};

export const sortTracksByMonth = (tracks) => {
  return tracks.sort((a, b) => b.month - a.month);
};