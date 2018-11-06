import reducer from './reducer'


describe('reducer Tests', () => {
  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      selections: [],
      color: '#fad0c3',
    })
  })

  it('ADD-SELECTION', () => {
    const state = {
      selections: [],
      color: '#fad0c3',
    };
    const action = {
      type: 'ADD-SELECTION',
      data: {
        color: "#fad0c3",
        range: { index: 0, length: 9 },
        text: "jest test"
      }
    };

    expect(reducer(state, action)).toEqual({
      color: '#fad0c3',
      selections: [{
        color: "#fad0c3",
        range: { index: 0, length: 9 },
        text: "jest test"
      }],
    })
  })

  it('DELETE', () => {
    const state = {
      color: '#fad0c3',
      selections: [{
        color: "#fad0c3",
        range: { index: 0, length: 9 },
        text: "jest test"
      }],
    };
    const action = {
      type: 'DELETE',
      data: {
        color: "#fad0c3",
        range: { index: 0, length: 9 },
        text: "jest test"
      }
    };

    expect(reducer(state, action)).toEqual({
      color: '#fad0c3',
      selections: [],
    })
  })

  it('CHANGE-COLOR', () => {
    const state = {
      color: '#fad0c3',
      selections: [],
    };
    const action = {
      type: 'CHANGE-COLOR',
      data: {
        color: { "hex": "#db3e00" },
      }
    };

    expect(reducer(state, action)).toEqual({
      color: '#db3e00',
      selections: [],
    })
  })


  it('RESET', () => {
    const state = {
      color: '#fad0c3',
      selections: [{
        color: "#fad0c3",
        range: { index: 0, length: 9 },
        text: "jest test"
      }, {
        color: "#fad0c3",
        range: { index: 0, length: 10 },
        text: "jest test2"
      }],
    }
    const action = { type: "RESET" };

    expect(reducer(state, action)).toEqual({
      color: '#fad0c3',
      selections: [],
    })
  })

})