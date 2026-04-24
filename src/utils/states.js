export const stateMapping = {
    'alabama': 'al', 'alaska': 'ak', 'arizona': 'az', 'arkansas': 'ar', 'california': 'ca',
    'colorado': 'co', 'connecticut': 'ct', 'delaware': 'de', 'florida': 'fl', 'georgia': 'ga',
    'hawaii': 'hi', 'idaho': 'id', 'illinois': 'il', 'indiana': 'in', 'iowa': 'ia',
    'kansas': 'ks', 'kentucky': 'ky', 'louisiana': 'la', 'maine': 'me', 'maryland': 'md',
    'massachusetts': 'ma', 'michigan': 'mi', 'minnesota': 'mn', 'mississippi': 'ms', 'missouri': 'mo',
    'montana': 'mt', 'nebraska': 'ne', 'nevada': 'nv', 'new hampshire': 'nh', 'new jersey': 'nj',
    'new mexico': 'nm', 'new york': 'ny', 'north carolina': 'nc', 'north dakota': 'nd', 'ohio': 'oh',
    'oklahoma': 'ok', 'oregon': 'or', 'pennsylvania': 'pa', 'rhode island': 'ri', 'south carolina': 'sc',
    'south dakota': 'sd', 'tennessee': 'tn', 'texas': 'tx', 'utah': 'ut', 'vermont': 'vt',
    'virginia': 'va', 'washington': 'wa', 'west virginia': 'wv', 'wisconsin': 'wi', 'wyoming': 'wy',
    'district of columbia': 'dc', 'dc': 'dc'
};

export const getStateAbbreviation = (stateInput) => {
    if (!stateInput) return '';
    const normalized = stateInput.trim().toLowerCase();
    
    // If it's already a 2-letter abbreviation
    if (normalized.length === 2) {
        return normalized;
    }
    
    return stateMapping[normalized] || '';
};

export const getOfficialVotingLinks = (stateInput) => {
    const abbrev = getStateAbbreviation(stateInput);
    
    // Default national links if state is unrecognized
    if (!abbrev) {
        return {
            registration: 'https://vote.gov/',
            checkStatus: 'https://www.vote.org/am-i-registered-to-vote/',
            whereToVote: 'https://www.vote.org/polling-place-locator/'
        };
    }
    
    // Official vote.gov dynamic links
    return {
        registration: `https://vote.gov/register/${abbrev}`,
        checkStatus: `https://vote.gov/register/${abbrev}`, // Most vote.gov state pages include check status
        whereToVote: `https://vote.gov/register/${abbrev}` // and polling places
    };
};
