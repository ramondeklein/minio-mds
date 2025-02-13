// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";

import { OverrideTheme } from "../../global/global.types";
import { NotificationAlertPrp } from "../NotificationAlert/NotificationAlert.types";

export interface NotificationStackProps {
  id: number;
  hovered: boolean;
  duration: number;
  timeoutId: NodeJS.Timeout | string | number | undefined;
  notificationInfo: NotificationAlertPrp;
}

export interface NotificationStackConstructProps {
  sx?: OverrideTheme;
}

export interface NotificationStackContainerProps {
  children: React.ReactNode[];
}
