/**
 * Day Related Methods
 */
class Day {

    /**
     * Is it Friday
     * @param  {String} today - Day name of today
     * @return {String} Yes/No
     */
    isItFriday(today) {
        return (today === "Friday") ? 'Yes' : 'No';
    }
}

module.exports = Day;