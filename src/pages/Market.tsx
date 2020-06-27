import React, { Fragment, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { formatCurrency } from '../utils/formatCurrency';
import { Loader, Divider } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { selectTicker } from '../redux/actions/Action';
import { navigate } from "@reach/router";
import { Link } from '@reach/router';

interface Props extends RouteComponentProps { }
const Market: React.FC<Props> = () => {
  const state = useSelector<any, any>(state => state.markets)
  const [groupByExchangeSymbol, setGroupByExchangeSymbol] = useState<any[]>();
  const dispatch = useDispatch();
  useEffect(() => {
    const groupBy = state.reduce((r: any, a: any) => {
      r[a.exchangeSymbol] = r[a.exchangeSymbol] || [];
      r[a.exchangeSymbol].push(a);
      return r;
    }, Object.create(null));
    setGroupByExchangeSymbol(Object.values(groupBy));
  }, [state])
  const onSelectedChanged = (markets: any) => {
    try {
      dispatch(selectTicker(markets));
      navigate("/detail")
    } catch (error) {
    };
  };
  return (
    <Fragment>
      <h1>Market</h1>
      <Divider />
      {groupByExchangeSymbol ? groupByExchangeSymbol.map((row: any, key: number) => {
        const render = <Fragment key={"Fragment" + key} >
          <h3>{row[0].exchangeSymbol}</h3>
          <Card.Group>
            {
              row.map((innerRow: any, index: number) =>
                <Card className="Card" onClick={() => onSelectedChanged(innerRow)} key={"Card" + key + index}>
                  <Card.Content>
                    <Card.Header><div className="CardDiv"><h1>{innerRow.marketSymbol?.toString().split(":")[1]}</h1></div></Card.Header>
                    <Card.Meta ><h2>{innerRow.ticker ? innerRow.ticker.lastPrice && formatCurrency(innerRow.ticker.lastPrice) : 0}</h2></Card.Meta>
                  </Card.Content>
                </Card>
              )
            }
          </Card.Group>
        </Fragment>
        return (render)
      }
      ) : <Loader active inline="centered" content="Loading" />}
      <div> <Link className="Link_Back" to="/">back to Home</Link></div>
    </Fragment>
  );
}

export default Market