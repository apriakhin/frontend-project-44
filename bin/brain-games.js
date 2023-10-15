#!/usr/bin/env node

import { welcome, getName, hello } from '../src/cli.js';

welcome();
const name = getName();
hello(name);
