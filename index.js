module.exports = {
  // TODO: manage this so it doesn't get too large
  _store: [],

  // store initial referrer on initial page load
  referrerInitial: {
    path: document.referrer,
    time: Date.now()
  },

  addPage: function addPage () {
    this._store.push({
      path: document.location.pathname,
      time: Date.now()
    })
  },

  currentPage: function currentPage () {
    return this._store[this._store.length - 1]
  },

  currentPageTime: function currentPageTime () {
    return Date.now() - this.currentPage().time
  },

  currentSessionTime: function currentSessionTime () {
    return Date.now() - this._store[0].time
  },

  previousPage: function previousPage () {
    var len = this._store.length
    if (len < 2) return null
    return this._store[len - 2]
  }
}
