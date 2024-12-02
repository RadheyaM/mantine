'use client'

import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import {
    CalendarStats,
    DeviceDesktopAnalytics,
    Fingerprint,
    Gauge,
    Home2,
    Settings,
    User,
  } from 'tabler-icons-react';
  import {Title, Tooltip, UnstyledButton} from '@mantine/core'
  import classes from './ScheduleLayout.module.css'
  import ScheduleLinksGroup from './components/ScheduleLayout/Links';

export default function ScheduleLayout({ children }: { children: any }) {
    const [opened, { toggle }] = useDisclosure();

    const mainLinks = [
        { icon: Home2, label: 'Home' },
        { icon: Gauge, label: 'Dashboard' },
        { icon: DeviceDesktopAnalytics, label: 'Analytics' },
        { icon: CalendarStats, label: 'Releases' },
        { icon: User, label: 'Account' },
        { icon: Fingerprint, label: 'Security' },
        { icon: Settings, label: 'Settings' },
      ];

    const linksData = [
    'Security',
    'Settings',
    'Dashboard',
    'Releases',
    'Account',
    'Orders',
    'Clients',
    'Databases',
    'Pull Requests',
    'Open Issues',
    'Wiki pages',
    ];



    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {mobile: !opened},
            }}
            padding="md"
        >
            <AppShell.Header> HEADER
                <Burger
                    opened={ opened }
                    onClick={ toggle }
                    hiddenFrom='sm'
                    size="sm"
                />
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <ScheduleLinksGroup/>
            </AppShell.Navbar>
        </AppShell>
    )
}