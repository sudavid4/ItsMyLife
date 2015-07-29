require.config({
    paths:{
        CriRow: '/js/reactBuilt/Criancas/'+'Row',
        CriCell: '/js/reactBuilt/Criancas/'+'Cell',
        CriHeaders: '/js/reactBuilt/Criancas/'+'Headers',
        CriCellFactory: '/js/reactBuilt/Criancas/'+'cellFactory'
    }
});

define(
    [
        '_',
        'publishers',
        'consts',
        'CriRow',
        'CriHeaders'
    ],
    function (_, publishers, consts, Row, Headers) {

    var Table = React.createClass({
        getDefaultProps: function () {
            return {
                HEADERS: ['receipt', 'payTo', 'children', 'numOfPayments', 'firstPayment', 'payMethod', 'payValue']
            };
        },
        render: function () {
            if (this.props.items.length === 0) {
                return <div />;
            }
            return (<div className='table main'>
                <Headers HEADERS={this.props.HEADERS}></Headers>
                {_.map(
                    this.props.items,
                    function (item) {

                        return <Row item={item} HEADERS={this.props.HEADERS} key={item._id}/>
                    }.bind(this)
                )}
            </div>);
        }
    });


    return Table;
});