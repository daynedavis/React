var MyComponent = React.createClass({
    incrementCount: function() {
        this.setState({
            count: this.state.count + 1
        });
    },
    getInitialState: function() {
        return {
            count: 0
        }
    },
    render: function() {
        return (
            <div class="my-component">
            <h1>Count: {this.state.count}</h1>
            <button type="button" onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
});

var FilteredList = React.createClass({
    filterList: function(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },
    getInitialState: function() {
        return {
            initialItems: [
                'Apples',
                'Brocolli',
                'Chicken',
                'Duck',
                'Eggs'
            ],
            items: []
        }
    },
    componentWillMount: function() {
        this.setState({items: this.state.initialItems})
    },
    render: function() {
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
            <List items={this.state.items}/>
            </div>
        );
    }
});

var List = React.createClass({
    render: function() {
        return (
            <ul>
            {
                this.props.items.map(function(item) {
                    return <li key={item}>{item}</li>
                })
            }
            </ul>
        )
    }
});

ReactDOM.render(
    <FilteredList/>,
    document.getElementById('mount-point')
);
