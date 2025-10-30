---
title: AstraKernel
---

# AstraKernel ~ A minimal ARM kernel for QEMU

[![GitHub release (including pre-releases)](https://img.shields.io/github/v/release/sandbox-science/AstraKernel?include_prereleases)](https://github.com/sandbox-science/AstraKernel/releases)
[![Doxygen Docs](https://github.com/sandbox-science/AstraKernel/actions/workflows/static.yml/badge.svg?branch=main)](https://github.com/sandbox-science/AstraKernel/actions/workflows/static.yml)

AstraKernel is a minimal experimental kernel written in modern C and ARM assembly, designed to run on
**QEMU’s Versatile AB/PB board with a Cortex‑A8 CPU override (-cpu cortex-a8)**. This setup keeps the
simple Versatile peripheral map while enabling **ARMv7‑A** features for experimentation. 
The purpose is educational, showing the fundamental steps of bringing up a bare-metal system, from 
low-level bootstrapping to higher-level interactive features to explore kernel development concepts.

```bash
========================================
  AstraKernel  v0.1.0
  Built Aug 27 2025 at 12:56:35
========================================

  CPU: Cortex-A8 @ 200MHz (simulated)
  RAM: 128MB SDRAM at 0x00000000

Welcome to your own little Astra world!
Type away, explore, have fun.

AstraKernel is running...
Press Ctrl-A and then X to exit QEMU.

AstraKernel >
```

## Target platform and configuration

- Machine (board): `versatilepb` (or `versatileab`)
- CPU model: `cortex-a8` (via `-cpu cortex-a8`)
- Key peripherals (Versatile map):
  - UART0 (PL011): 0x101F1000
  - Timers (SP804): 0x101E2000
  - Interrupt controller: VIC at 0x10140000
  - SDRAM base: 0x00000000
- Exception vectors: initially at 0x00000000 (32-byte aligned).
  
Later, the kernel may relocate vectors using VBAR once the MMU is enabled.

## Tech Stack

- C
- ARM Assembly
- Docker

## Features so far

The development of **AstraKernel** is divided into multiple phases. The first foundational phase, **Phase A**, 
which focused on bringing up the kernel, has been completed. The next step on the roadmap is **Phase B**, 
which will focus on building the **Process and Memory Management** system. Then, **Phase C** will focus 
on building **Storage Foundations**. After that, **Phase D**, will focus on the first **File Operations**, 
such as `touch`, `echo`, `cat`, etc commands. Then, finally the last phase will be **Phase E**, which will 
bring up **Persistence** to support on-disk filesystems.

Here is the completed **Phase A**:

- [x] **Bootstrapping**: stack setup, BSS clearing, entry into the kernel main.
- [x] **UART I/O**: putc/puts, getc/getline, basic shell loop.
- [x] **Vector Table**: Define vector table for exceptions/interrupts.
- [x] **Basic Timer Interrupt**: Configure one hardware timer, hook its interrupt to increment a "tick" counter.

This project is a hands-on, low-level project perfect for anyone curious about operating systems, 
ARM architecture, or/and kernel development. Whatever your background there’s room for contribution.

## Documentation

For more details about this kernel, refer to the [AstraKernel Doxygen Documentation](https://sandbox-science.github.io/AstraKernel/).

> <Badge type="info" text="Note" /> You can also to refer to the manual (which is a work in progress and may not cover all features yet) at [AstraKernel Documentation](https://github.com/sandbox-science/AstraKernel/blob/main/doc/AstraKernelManual.pdf)..

**Repository**: https://github.com/sandbox-science/AstraKernel
