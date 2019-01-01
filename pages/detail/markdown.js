import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { highlightAll } from 'prismjs';
// import ImageRenderer from '../../component/ImageRender';
// import '../../assets/prism.less';

export class Markdown extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired
    };

    componentDidMount() {
        highlightAll();
    }

    componentDidUpdate(prevProps) {
        highlightAll();
    }

    render() {
        return (
            <ReactMarkdown
                source={this.props.source}
            />
        );
    }
}

export default Markdown;