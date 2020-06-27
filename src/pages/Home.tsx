import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { GET_COINS_QUERY } from '../utils/queries'
import * as GetListTypes from '../utils/types'
import { RouteComponentProps } from '@reach/router';
import { Loader, Divider, Input, Icon } from 'semantic-ui-react'
import { Image, Table } from 'semantic-ui-react'
import { formatCurrency, searchValue } from '../utils/formatCurrency'
import { selectMarket } from '../redux/actions/Action';
import { navigate } from "@reach/router"


interface AssetsProps extends RouteComponentProps { }
const Home: React.FC<AssetsProps> = () => {
  const [search, setSeach] = useState("")
  const dispatch = useDispatch();
  const { data,
    loading,
    error } = useQuery<
      GetListTypes.assets,
      GetListTypes.GetAssetsVariables
    >(GET_COINS_QUERY, {
      variables: {
        limit: 25,
        coin: searchValue(search)
      }
    })
  const onSelectedChanged = (markets: GetListTypes.PageMarkets[]) => {
    try {
      dispatch(selectMarket(markets));
      navigate("/market")
    } catch (error) {
    };
  };
  return (
    <Fragment>
      <h1>Assets</h1>
      <Divider />
      <div className="Search"><Input icon placeholder='Search...'>
        <input onChange={e => setSeach(e.target.value)} />
        <Icon name='search' />
      </Input></div>
      {error ? <h1>Error Fetching Coin Data!</h1> : null}
      {loading ? (
        <Loader active inline="centered" content="Loading" />
      ) : (

          <Table color="orange" singleLine selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>pair</Table.HeaderCell>
                <Table.HeaderCell>Symbol</Table.HeaderCell>
                <Table.HeaderCell>Market Cap</Table.HeaderCell>
                <Table.HeaderCell>Current Supply</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data?.assets && data.assets.map((row: any) => (
                <Table.Row key={row.id} style={{ cursor: 'pointer' }} onClick={() => onSelectedChanged(row.markets)} >
                  <Table.Cell>{row.assetName}</Table.Cell>
                  <Table.Cell>{row.assetSymbol}</Table.Cell>
                  <Table.Cell> <Image src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${row.marketCapRank}.png`} avatar /></Table.Cell>
                  <Table.Cell>{formatCurrency(row.marketCap)}</Table.Cell>
                  <Table.Cell>{formatCurrency(row.currentSupply)}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
    </Fragment>
  )
}
export default Home;