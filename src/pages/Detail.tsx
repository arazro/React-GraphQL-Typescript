import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { formatCurrency, Currency } from '../utils/formatCurrency';
import { Divider, Statistic } from 'semantic-ui-react';
import { Link } from '@reach/router';

interface Props extends RouteComponentProps { }
const Detail: React.FC<Props> = () => {
  const state = useSelector<any, any>(state => state.ticker)

  return (
    <Fragment>
      <h1>Detail</h1>
      <Divider />
      {state?.ticker && <><h3>{state.exchangeSymbol}</h3>
        <Card.Group>
          <Card className="CardDetail"  >
            <a><Card.Content>
              <Card.Header><div className="CardDetailDiv"><h4>{state.exchangeSymbol}</h4></div></Card.Header>
              <Card.Meta>
                <Statistic >
                  <Statistic.Value><h2> {state.marketSymbol?.toString().split(":")[1]}</h2></Statistic.Value>
                  <h6><Statistic.Label>Pair</Statistic.Label></h6>
                </Statistic>
                <Statistic >
                  <Statistic.Value><h2>{state.ticker ? state.ticker.lastPrice && formatCurrency(state.ticker.lastPrice) : 0}</h2></Statistic.Value>
                  <h6><Statistic.Label>Price</Statistic.Label></h6>
                </Statistic>
              </Card.Meta>
              <Card.Meta >
                <Divider />
                <Statistic >
                  <Statistic.Value><h3> {state.ticker ? state.ticker.lastPrice && formatCurrency(state.ticker.lastPrice) : 0}</h3></Statistic.Value>
                  <h6><Statistic.Label>Last Price</Statistic.Label></h6>
                </Statistic>
                <Statistic color='green'>
                  <Statistic.Value><h3>{state.ticker ? state.ticker.percentChange && Currency(state.ticker.percentChange) : 0}</h3></Statistic.Value>
                  <h6><Statistic.Label>Percent Change</Statistic.Label></h6>
                </Statistic>
                <Statistic >
                  <Statistic.Value><h3>{state.ticker ? state.ticker.lowPrice && formatCurrency(state.ticker.lowPrice) : 0}</h3></Statistic.Value>
                  <h6><Statistic.Label>Low Price</Statistic.Label></h6>
                </Statistic>
                <Statistic >
                  <Statistic.Value><h3>{state.ticker ? state.ticker.highPrice && formatCurrency(state.ticker.highPrice) : 0}</h3></Statistic.Value>
                  <h6><Statistic.Label>High Price</Statistic.Label></h6>
                </Statistic>
              </Card.Meta>
            </Card.Content></a>
          </Card>
        </Card.Group></>}
      <div> <Link className="Link_Back" to="/market">back to Market</Link></div>
    </Fragment>
  );
}
export default Detail



