import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { 
  Typography, 
  Paper, 
  Grid, 
  makeStyles,
  Button
} from '@material-ui/core';
import {
  AccountTree as NetworkIcon,
  Timeline as RouteIcon,
  Search as SearchIcon,
  CallSplit as GitGraphIcon,
  ChevronRight as ChevronRightIcon
} from '@material-ui/icons';
import Layout from './components/Layout/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(4),
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  title: {
    color: '#1a237e',
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  card: {
    padding: theme.spacing(3),
    height: '100%',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: 48,
    color: '#1a237e',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  chevronIcon: {
    color: '#1a237e',
    marginTop: 4,
  },
  startButton: {
    marginTop: theme.spacing(4),
    backgroundColor: '#1a237e',
    color: 'white',
    '&:hover': {
      backgroundColor: '#000051',
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleStart = () => {
    history.push('/visualizer');
  };

  const concepts = [
    {
      title: "What is a Graph?",
      icon: <NetworkIcon className={classes.icon} />,
      description: "A graph is a data structure consisting of two main components:",
      points: [
        "Vertices (or Nodes): Points that represent entities",
        "Edges: Lines connecting vertices that represent relationships",
        "Examples: Social networks, road maps, computer networks",
        "Can be directed (one-way) or undirected (two-way) connections"
      ]
    },
    {
      title: "What is Graph Traversal?",
      icon: <RouteIcon className={classes.icon} />,
      description: "Graph traversal is the process of visiting all vertices in a graph:",
      points: [
        "Systematic way of exploring all nodes",
        "Used to search for elements or paths",
        "Essential for solving graph-related problems",
        "Two main approaches: BFS and DFS"
      ]
    },
    {
      title: "What is BFS (Breadth-First Search)?",
      icon: <SearchIcon className={classes.icon} />,
      description: "BFS explores a graph level by level:",
      points: [
        "Visits all neighbors before moving to next level",
        "Uses a queue data structure",
        "Finds shortest path in unweighted graphs",
        "Great for finding closest relationships"
      ]
    },
    {
      title: "What is DFS (Depth-First Search)?",
      icon: <GitGraphIcon className={classes.icon} />,
      description: "DFS explores as far as possible along each branch:",
      points: [
        "Goes deep into one path before backtracking",
        "Uses a stack data structure",
        "Good for maze solving and path finding",
        "Efficient for exploring all possible paths"
      ]
    }
  ];

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2" className={classes.title}>
          Graph Algorithm Visualizer
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Understanding the fundamentals of graph theory and algorithms
        </Typography>
      </div>

      <Grid container spacing={4}>
        {concepts.map((concept, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} className={classes.card}>
              <div className={classes.iconContainer}>
                {concept.icon}
                <Typography variant="h4" style={{ color: '#1a237e' }}>
                  {concept.title}
                </Typography>
              </div>
              <Typography color="textSecondary" paragraph>
                {concept.description}
              </Typography>
              {concept.points.map((point, idx) => (
                <div key={idx} className={classes.listItem}>
                  <ChevronRightIcon className={classes.chevronIcon} />
                  <Typography color="textPrimary">
                    {point}
                  </Typography>
                </div>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <div style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          className={classes.startButton}
          onClick={handleStart}
        >
          Start Learning
        </Button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/visualizer" component={Layout} />
      </Switch>
    </Router>
  );
};

export default App;