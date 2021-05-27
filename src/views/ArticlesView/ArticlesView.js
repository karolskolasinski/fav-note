import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ArticleView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.article} />
        )}

    </AppContext.Consumer>
);

export default ArticleView;
