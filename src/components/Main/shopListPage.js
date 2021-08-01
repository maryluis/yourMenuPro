import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import { CShopList } from '..';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ShopListPage = ({list}) => {
    const history = useHistory();
    useEffect(() =>   { 
        !list.titles && history.push("/")
        },[list, history])
    return(
        <CShopList/>
    )
}

const mapStateToProps = state => ({
    list: state.shopList,
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const CShopListPage = connect(mapStateToProps, mapDispatchToProps)(ShopListPage);

export default CShopListPage;