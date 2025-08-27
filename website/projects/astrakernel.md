---
title: AstraKernel
---

# AstraKernel ~ A minimal ARM kernel for QEMU

AstraKernel is a minimal experimental kernel written in modern C and ARM assembly, designed to run on 
**QEMU's VersatileAB (Cortex-A8)** platform. The purpose is educational, showing the fundamental 
steps of bringing up a bare-metal system, from low-level bootstrapping to higher-level interactive features 
to explore kernel development concepts.

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

## Tech Stack

- C
- ARM Assembly
- Docker

## Features so far

The development of **AstraKernel** is divided into multiple phases. The first foundational phase, **Phase A**, 
which focused on bringing up the kernel, has been completed. The next step on the roadmap is **Phase B**, 
which will focus on building the **Process and Memory Management** system.

Here is **Phase A**:

- [x] **Bootstrapping**: stack setup, BSS clearing, entry into the kernel main.
- [x] **UART I/O**: putc/puts, getc/getline, basic shell loop.
- [x] **Vector Table**: Define vector table for exceptions/interrupts.
- [x] **Basic Timer Interrupt**: Configure one hardware timer, hook its interrupt to increment a "tick" counter.

## Documentation

For more details about this kernel, refer to the [AstraKernel Documentation](https://github.com/sandbox-science/AstraKernel/blob/main/doc/AstraKernelManual.pdf).

> <Badge type="info" text="Note" /> The manual is a work in progress and may not cover all features yet.

**Repository**: https://github.com/sandbox-science/AstraKernel
