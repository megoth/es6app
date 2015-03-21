'use strict';

import angular from 'angular';
import "angular-ui/ui-router";
import { Router } from "./router";

angular.module('workshop', ['ui.router']);
angular.module('workshop').config(Router);
