import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
    class requireAuth extends Component {
        componentWillReceiveProps(nextProps) {
            if (!nextProps.data.loading && !nextProps.data.user) {
                hashHistory.push('/login');
            }
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
    return graphql(query)(requireAuth);
}