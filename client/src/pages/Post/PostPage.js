import React from 'react';
import { withStyles } from '@material-ui/styles';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Post from './Post';
import MorePosts from './MorePosts';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getBoardsandPosts } from '../../actions/profileActions';

const styles = theme => ({
    post: {
        marginBottom: theme.spacing(4)
    },
    more: {
        marginTop: theme.spacing(4)
    }
});

class PostPage extends React.Component {
    state = {
        id: '',
        board: ''
    };

    componentDidMount () {
        const id = this.props.match.params.id;
        this.setState({ id });
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    };

    save = e => {
        e.preventDefault();
        console.log(this.state.board);
    };

    render () {
        const {
            classes,
            profile,
            userStore: { user },
            post,
            morePosts,
            match,
            getBoardsandPosts
        } = this.props;

        if (!profile.boards) {
            getBoardsandPosts(user.username);
            return (
                <div>
                    <Navbar />
                    <CircularProgress />
                </div>
            );
        }

        if (!post(match.params.id)) {
            return (
                <div>
                    <h1>No Post found</h1>
                </div>
            );
        }

        return (
            <div>
                <Navbar />
                <div className={classes.post}>
                    <Post
                        handleSave={this.save}
                        handleSelectBoard={this.handleChange}
                        value={this.state.board}
                        post={post(match.params.id)}
                        boards={profile.boards}
                    />
                </div>
                <Divider component={'hr'} />
                <div className={classes.more}>
                    <MorePosts posts={morePosts} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userStore: state.UserStore,
    post: id => {
        return (
            {
                ...state.ProfileStore.posts.find(post => {
                    return id === post._id;
                }),
                user: { ...state.UserStore.user }
            } ||
            state.ProfileStore.posts.find(post => {
                return id === post._id;
            })
        );
    },
    morePosts: state.PostStore.morePosts,
    profile: state.ProfileStore
});

function mapDispatchToProps (dispatch) {
    return bindActionCreators(
        {
            getBoardsandPosts
        },
        dispatch
    );
}

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(PostPage);
